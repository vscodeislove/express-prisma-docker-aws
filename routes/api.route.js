const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/product", async (req, res, next) => {
  try {
    console.log("dilip tadha");
    const prods = await prisma.product.findMany({});
    res.json(prods);
  } catch (error) {
    next(error);
  }
});

router.get("/product/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const prod = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    res.send(prod);
  } catch (error) {
    next(error);
  }
});

router.post("/product", async (req, res, next) => {
  try {
    const prod = await prisma.product.create({
      data: req.body,
    });
    res.json(prod);
  } catch (error) {
    next(error);
  }
});

router.put("/product/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const prod = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    res.json(prod);
  } catch (error) {
    next(error);
  }
});

router.delete("/product/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const prod = await prisma.product.delete({
      where: {
        id,
      },
    });
    res.send(prod);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
