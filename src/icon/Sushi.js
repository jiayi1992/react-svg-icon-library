import * as React from "react";

function SvgSushi(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <circle cx={256} cy={256} r={256} fill="#f2cf61" />
      <path fill="#242424" d="M200 400h108v16H200z" />
      <path fill="#1a1a1a" d="M292 400h16v16h-16z" />
      <path
        d="M404 332c0 41.968-65.156 76-148 76s-148-34.032-148-76h296z"
        fill="#242424"
      />
      <path
        d="M388 332c0 40.608-61 73.78-140 75.892 2.648.08 5.312.108 8 .108 82.844 0 148-34.032 148-76h-16z"
        fill="#1a1a1a"
      />
      <path
        d="M114.784 338c18.86 8.108 74.944 14 141.216 14s122.356-5.892 141.216-14c-18.86-8.108-74.944-14-141.216-14s-122.356 5.892-141.216 14z"
        fill="#66401e"
      />
      <path
        d="M138.784 338c17.712-7.616 68.252-13.272 129.216-13.928-3.96-.048-7.96-.072-12-.072-66.264 0-122.356 5.892-141.216 14 18.86 8.108 74.944 14 141.216 14 4.04 0 8.04-.024 12-.072-60.964-.656-111.504-6.312-129.216-13.928z"
        fill="#59381a"
      />
      <path
        d="M256 312c-81.736 0-148 8.952-148 20 0 2.608 3.732 5.092 10.444 7.384-1.328-.452-2.58-.916-3.66-1.384 18.86-8.108 74.944-14 141.216-14s122.356 5.892 141.216 14c-1.084.468-2.332.92-3.66 1.384C400.276 337.092 404 334.608 404 332c0-11.048-66.264-20-148-20z"
        fill="#ccc"
      />
      <g fill="#bfbfbf">
        <path d="M116.072 338.512zM116.068 338.512zM124 332c0-10.684 61.984-19.408 140-19.968-2.648-.02-5.316-.032-8-.032-81.736 0-148 8.952-148 20 0 2.084 2.424 4.092 6.824 5.984 2.724-1.168 6.3-2.284 10.492-3.348-.848-.864-1.316-1.736-1.316-2.636zM114.784 338c.404.172.844.344 1.272.512-.432-.172-.832-.352-1.244-.528 0 .008-.016.012-.028.016zM397.216 338c-.012-.004-.028-.008-.04-.016-.412.176-.8.356-1.244.528.44-.168.88-.34 1.284-.512zM395.928 338.512zM395.932 338.512z" />
      </g>
      <path
        d="M368.508 26.024l-86.74 218.288c-.98 2.484.112 5.352 2.58 6.5 2.548 1.2 5.588.1 6.788-2.448L390 37.868a253.213 253.213 0 00-21.492-11.844z"
        fill="#242424"
      />
      <path
        d="M368.508 26.024l-83.232 209.464 90.32-205.832a262.4 262.4 0 00-7.088-3.632z"
        fill="#333"
      />
      <ellipse cx={256} cy={224} rx={92} ry={40} fill="#f5f5f5" />
      <path
        d="M256 184c-2.7 0-5.36.064-8 .16 47.064 1.76 84 18.92 84 39.84s-36.936 38.08-84 39.84c2.64.096 5.3.16 8 .16 50.812 0 92-17.908 92-40s-41.188-40-92-40z"
        fill="#e6e6e6"
      />
      <path
        d="M188 248c0-22.092 41.188-40 92-40 26.784 0 50.892 4.98 67.704 12.92C344.084 200.264 304.428 184 256 184c-50.812 0-92 17.908-92 40 0 10.444 9.22 19.952 24.296 27.08-.176-1.016-.296-2.044-.296-3.08z"
        fill="#cc584c"
      />
      <path
        d="M329.14 214.244c6.828 1.892 13.108 4.104 18.564 6.68C344.084 200.264 304.428 184 256 184c-2.752 0-5.452.064-8.136.164 39.536 1.452 71.868 13.772 81.276 30.08z"
        fill="#bf5347"
      />
      <g fill="#242424">
        <path d="M272 260c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v72z" />
        <path d="M336.384 12.944L219.696 209.256c-1.36 2.304-.724 5.304 1.52 6.828a5.098 5.098 0 007.088-1.352L359.468 21.84a260.048 260.048 0 00-23.084-8.896z" />
      </g>
      <path
        d="M336.384 12.944L219.696 209.256c-1.084 1.828-.856 4.076.4 5.696.064-.084.16-.124.22-.22L345.132 15.968c-2.888-1.068-5.816-2.052-8.748-3.024z"
        fill="#333"
      />
      <path
        d="M56.228 416c46.916 58.504 118.948 96 199.772 96s152.856-37.496 199.772-96H56.228z"
        fill="#1a1a1a"
      />
      <path
        d="M448.992 424c2.296-2.636 4.592-5.264 6.78-8H56.22c2.188 2.736 4.484 5.364 6.78 8h385.992z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgSushi;
