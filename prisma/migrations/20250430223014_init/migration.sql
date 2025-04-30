-- CreateTable
CREATE TABLE "PoolInfo" (
    "id" TEXT NOT NULL,
    "volume_24h" DOUBLE PRECISION NOT NULL,
    "pool_address" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "token1" TEXT,
    "token1_account" TEXT,
    "token2" TEXT,
    "token2_account" TEXT,
    "total_volume_24h" DOUBLE PRECISION,
    "total_trade_24h" DOUBLE PRECISION,
    "created_time" BIGINT,

    CONSTRAINT "PoolInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolDetails" (
    "id" TEXT NOT NULL,
    "pool_address" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "create_tx_hash" TEXT NOT NULL,
    "create_block_time" BIGINT NOT NULL,
    "creator" TEXT NOT NULL,
    "lp_token" TEXT NOT NULL,

    CONSTRAINT "PoolDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenInfo" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "token_account" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "poolDetailsId" TEXT NOT NULL,

    CONSTRAINT "TokenInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolMetrics" (
    "id" TEXT NOT NULL,
    "pool_address" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "total_volume_24h" DOUBLE PRECISION NOT NULL,
    "total_volume_change_24h" DOUBLE PRECISION NOT NULL,
    "total_trades_24h" DOUBLE PRECISION NOT NULL,
    "total_trades_change_24h" DOUBLE PRECISION NOT NULL,
    "poolInfoId" TEXT,

    CONSTRAINT "PoolMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricDay" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "poolMetricsId" TEXT NOT NULL,

    CONSTRAINT "MetricDay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PoolInfo_pool_address_key" ON "PoolInfo"("pool_address");

-- CreateIndex
CREATE UNIQUE INDEX "PoolDetails_pool_address_key" ON "PoolDetails"("pool_address");

-- AddForeignKey
ALTER TABLE "PoolDetails" ADD CONSTRAINT "PoolDetails_pool_address_fkey" FOREIGN KEY ("pool_address") REFERENCES "PoolInfo"("pool_address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenInfo" ADD CONSTRAINT "TokenInfo_poolDetailsId_fkey" FOREIGN KEY ("poolDetailsId") REFERENCES "PoolDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoolMetrics" ADD CONSTRAINT "PoolMetrics_poolInfoId_fkey" FOREIGN KEY ("poolInfoId") REFERENCES "PoolInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricDay" ADD CONSTRAINT "MetricDay_poolMetricsId_fkey" FOREIGN KEY ("poolMetricsId") REFERENCES "PoolMetrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
