import { https } from './config';

export const nguoiDungServ = {
  dangNhap: (data) => {
    return https.post('/api/QuanLyNguoiDung/DangNhap', data);
  },
};
