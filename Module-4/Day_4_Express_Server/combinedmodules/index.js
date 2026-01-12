import express from "express";
import os from "os";
import dns from "dns/promises";
import { readDataFile } from "./read.js";

const app = express();
const PORT = 3000;

/* =========================
   Test Route
========================= */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* =========================
   Read File Route
========================= */
app.get("/readfile", async (req, res) => {
  try {
    const data = await readDataFile();
    res.send(data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

/* =========================
   System Details Route
========================= */
app.get("/systemdetails", (req, res) => {
  const systemDetails = {
    platform: os.platform(),
    totalMemory: `${Math.round(os.totalmem() / 1024 ** 3)} GB`,
    freeMemory: `${Math.round(os.freemem() / 1024 ** 3)} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length
  };

  res.json(systemDetails);
});

/* =========================
   Get IP Route (IPv4 + IPv6)
========================= */
app.get("/getip", async (req, res) => {
  try {
    const hostname = "masaischool.com";

    const ipv4 = await dns.resolve4(hostname);
    const ipv6 = await dns.resolve6(hostname);

    res.json({
      hostname,
      ipv4Addresses: ipv4,
      ipv6Addresses: ipv6
    });
  } catch (error) {
    res.status(500).json({
      error: "DNS resolution failed"
    });
  }
});

/* =========================
   Start Server
========================= */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
