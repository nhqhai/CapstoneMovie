import { createSlice } from '@reduxjs/toolkit';
import { layDuLieuLocal } from '../../utils/localStore';

// lần đầu tiên vào trang web store sẽ dc khởi tạo
const initialState = {
  hoTen: layDuLieuLocal('user'),
};

// thư viện immerjs
export const nguoiDungSlice = createSlice({
  name: 'nguoiDung',
  initialState,
  reducers: {
    // ở đây tạo một phương thức giúp xử lí state bên trên store redux
    setDuLieuHoTen: (state, action) => {
      // check xem hoTen có dữ liệu hay không, nếu không có set dữ liệu cho nó
      console.log(action);
      if (state.hoTen == null) {
        state.hoTen = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDuLieuHoTen } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
