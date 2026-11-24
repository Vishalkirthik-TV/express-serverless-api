import express from "express";
import os from "node:os";

const app = express();

const PORT = Number(process.env.PORT || 5757);

app.get("/", (req, res) => {
    res.json({ status: "You are now listening to express serverless function", goTo: "/api/health to know about server health" });
})

app.get("/api/health", (req, res) => {
    const memory = process.memoryUsage();

    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        server: {
            platform: os.platform(),
            architecture: os.arch(),
            nodeVersion: process.version,
            environment: process.env.NODE_ENV || "development",
        },
        memory: {
            total: os.totalmem(),
            free: os.freemem(),
            heapUsed: memory.heapUsed,
            heapTotal: memory.heapTotal,
            rss: memory.rss,
        },
        cpu: {
            cores: os.cpus().length,
            loadAverage: os.loadavg(),
        },
    });
});

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})