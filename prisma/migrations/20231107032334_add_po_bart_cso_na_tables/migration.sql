-- CreateTable
CREATE TABLE "barts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "barts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "csos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "csos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "barts_name_key" ON "barts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "csos_name_key" ON "csos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pos_name_key" ON "pos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "nas_name_key" ON "nas"("name");
