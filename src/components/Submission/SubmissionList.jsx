import React from "react";

const SubmissionList = ({ datas }) => {
  return datas.map((data, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KEp0nbYTRsjU0Ia3PKkie8yUXREYsqbiTHGO0aU&s"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data.nama}</div>
            <div className="text-sm opacity-50">{data.alamat}</div>
          </div>
        </div>
      </td>
      <td>{data.alamat}</td>
      <td>{data.email}</td>
      <td>
        <span className="badge badge-ghost badge-sm">
          {data.tingkat} | {data.jurusan}
        </span>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">
          {data.jabatan} | {data.lama_bekerja}
        </span>
      </td>
      <th>
        <button className="btn btn-outline btn-xs">details</button>
      </th>
    </tr>
  ));
};

export default SubmissionList;
