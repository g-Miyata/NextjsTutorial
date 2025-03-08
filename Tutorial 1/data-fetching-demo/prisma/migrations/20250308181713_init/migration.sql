-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");
