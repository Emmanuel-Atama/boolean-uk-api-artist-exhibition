-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExhibitionsOnArtists" (
    "exhibitionId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "ExhibitionsOnArtists_pkey" PRIMARY KEY ("exhibitionId","artistId")
);

-- AddForeignKey
ALTER TABLE "ExhibitionsOnArtists" ADD CONSTRAINT "ExhibitionsOnArtists_exhibitionId_fkey" FOREIGN KEY ("exhibitionId") REFERENCES "Exhibition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExhibitionsOnArtists" ADD CONSTRAINT "ExhibitionsOnArtists_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
