import numpy as np
from flask import Flask, request, jsonify

app = Flask(__name__)

def levy(beta, size):
    sigma = (np.math.gamma(1 + beta) * np.sin(np.pi * beta / 2) /
             (np.math.gamma((1 + beta) / 2) * beta * 2 ** ((beta - 1) / 2))) ** (1 / beta)
    u = np.random.normal(0, sigma, size)
    v = np.random.normal(0, 1, size)
    return u / abs(v) ** (1 / beta)

def eeo_keygen(pop_size=10, dim=32, iter_max=50):
    Pmin, Pmax = 0, 1
    a1, a2 = 2, 1.5
    lambda_val = np.random.rand()

    population = Pmin + levy(1.5, (pop_size, dim)) * (Pmax - Pmin)
    fitness = np.sum(population, axis=1)
    best_idx = np.argsort(fitness)[:4]
    Peq = population[best_idx]
    Peq_avg = np.mean(Peq, axis=0)
    Peq_pool = np.vstack((Peq, Peq_avg))

    for iter in range(iter_max):
        t = (1 - iter / iter_max) * (a2 * (iter / iter_max))
        t0 = (1 / lambda_val) * np.log(1e-10 + np.exp(-lambda_val * t))
        for i in range(pop_size):
            F = np.exp(-lambda_val * (t - t0))
            R = np.random.rand(dim)
            P_new = Peq_avg + (population[i] - Peq_avg) * F + R / lambda_val * (1 - F)
            population[i] = np.clip(P_new, Pmin, Pmax)
    key = population[np.argmin(np.sum(population, axis=1))]
    return (key * 255).astype(int).tolist()  # Return as 0-255 for use as AES key

@app.route("/generate-key", methods=["GET"])
def generate_key():
    key = eeo_keygen()
    return jsonify({"key": key})

if __name__ == "__main__":
    app.run(port=6000)