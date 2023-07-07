import { https } from "./config";

export const movieServ = {
    getAllBanner: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachBanner");
    },
};