import React from 'react'

const Logo = ({ width = 28, height = width * 1.25, ...props }) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 28 35"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13.2426 20.3507V27.5807C13.2426 27.8579 13.1325 28.1237 12.9365 28.3196C12.7406 28.5156 12.4748 28.6257 12.1976 28.6257C11.9205 28.6257 11.6547 28.5156 11.4587 28.3196C11.2627 28.1237 11.1526 27.8579 11.1526 27.5807V20.3607C11.4436 20.5732 11.7924 20.6918 12.1526 20.7007C12.5452 20.7119 12.9299 20.5884 13.2426 20.3507ZM22.1426 18.2607C21.8774 18.2607 21.623 18.3661 21.4355 18.5536C21.248 18.7411 21.1426 18.9955 21.1426 19.2607V20.5207C21.1426 20.7979 21.2527 21.0637 21.4487 21.2596C21.6446 21.4556 21.9104 21.5657 22.1876 21.5657C22.4648 21.5657 22.7306 21.4556 22.9265 21.2596C23.1225 21.0637 23.2326 20.7979 23.2326 20.5207V19.3107C23.2404 19.1673 23.2172 19.0239 23.1646 18.8903C23.112 18.7567 23.0313 18.6359 22.9278 18.5363C22.8244 18.4367 22.7007 18.3605 22.5653 18.3129C22.4298 18.2654 22.2856 18.2476 22.1426 18.2607ZM8.88263 23.0907C8.5228 23.0799 8.17446 22.9615 7.88263 22.7507V30.0007C7.88263 30.2792 7.99325 30.5463 8.19017 30.7432C8.38708 30.9401 8.65415 31.0507 8.93263 31.0507C9.21111 31.0507 9.47818 30.9401 9.67509 30.7432C9.87201 30.5463 9.98263 30.2792 9.98263 30.0007V22.8007C9.65608 23.0118 9.27079 23.1134 8.88263 23.0907ZM18.8826 16.0907C18.7471 16.0839 18.6117 16.1048 18.4845 16.152C18.3574 16.1992 18.2412 16.2718 18.1429 16.3653C18.0447 16.4589 17.9666 16.5714 17.9132 16.6961C17.8599 16.8208 17.8324 16.9551 17.8326 17.0907V22.6607C17.8326 22.9392 17.9432 23.2063 18.1401 23.4032C18.3371 23.6001 18.6041 23.7107 18.8826 23.7107C19.1611 23.7107 19.4282 23.6001 19.6251 23.4032C19.822 23.2063 19.9326 22.9392 19.9326 22.6607V17.1607C19.9406 17.0164 19.9172 16.8721 19.864 16.7377C19.8108 16.6033 19.7292 16.482 19.6246 16.3822C19.52 16.2824 19.3951 16.2064 19.2584 16.1596C19.1217 16.1127 18.9764 16.096 18.8326 16.1107L18.8826 16.0907ZM15.5626 18.2307C15.1859 18.2281 14.8193 18.1094 14.5126 17.8907V25.1607C14.5126 25.4392 14.6232 25.7063 14.8201 25.9032C15.0171 26.1001 15.2841 26.2107 15.5626 26.2107C15.8411 26.2107 16.1081 26.1001 16.3051 25.9032C16.502 25.7063 16.6126 25.4392 16.6126 25.1607V17.9007C16.2954 18.137 15.9081 18.2602 15.5126 18.2507L15.5626 18.2307ZM6.61263 23.8007V3.49071C6.61 3.24314 6.5098 3.00662 6.3338 2.83249C6.1578 2.65836 5.92021 2.5607 5.67263 2.56071H5.45263C5.20505 2.5607 4.96746 2.65836 4.79146 2.83249C4.61546 3.00662 4.51526 3.24314 4.51263 3.49071V23.8007C4.51263 24.05 4.61167 24.2891 4.78795 24.4654C4.96423 24.6417 5.20333 24.7407 5.45263 24.7407H5.67263C5.92194 24.7407 6.16103 24.6417 6.33731 24.4654C6.5136 24.2891 6.61263 24.05 6.61263 23.8007ZM8.99263 22.3207H8.77263C8.52333 22.3207 8.28423 22.2217 8.10795 22.0454C7.93167 21.8691 7.83263 21.63 7.83263 21.3807V5.91071C7.83527 5.66315 7.93546 5.42661 8.11146 5.25249C8.28746 5.07836 8.52505 4.9807 8.77263 4.98071H8.99263C9.24021 4.9807 9.4778 5.07836 9.6538 5.25249C9.8298 5.42661 9.93 5.66315 9.93263 5.91071V21.4007C9.93263 21.65 9.83359 21.8891 9.65731 22.0654C9.48103 22.2417 9.24193 22.3407 8.99263 22.3407V22.3207ZM12.3026 19.9407H12.0726C11.826 19.9407 11.5894 19.8427 11.415 19.6683C11.2406 19.4939 11.1426 19.2574 11.1426 19.0107V8.31071C11.1413 8.18774 11.1644 8.06573 11.2105 7.95174C11.2566 7.83775 11.3249 7.73405 11.4114 7.64663C11.4979 7.55921 11.6009 7.48981 11.7144 7.44245C11.8279 7.39509 11.9496 7.3707 12.0726 7.37071H12.3026C12.5502 7.37335 12.7867 7.47354 12.9608 7.64954C13.135 7.82554 13.2326 8.06313 13.2326 8.31071V19.0107C13.2326 19.2574 13.1346 19.4939 12.9602 19.6683C12.7858 19.8427 12.5493 19.9407 12.3026 19.9407ZM15.6126 17.4907H15.4026C15.155 17.4907 14.9174 17.3931 14.7414 17.2189C14.5654 17.0448 14.4652 16.8083 14.4626 16.5607V10.8007C14.4544 10.6723 14.4726 10.5436 14.5162 10.4225C14.5597 10.3015 14.6277 10.1906 14.7158 10.0969C14.8039 10.0031 14.9103 9.92851 15.0285 9.87751C15.1466 9.82661 15.2739 9.80041 15.4026 9.80071H15.6226C15.8719 9.80071 16.111 9.89971 16.2873 10.076C16.4636 10.2523 16.5626 10.4914 16.5626 10.7407V16.5407C16.5639 16.665 16.5406 16.7883 16.4939 16.9035C16.4473 17.0187 16.3783 17.1235 16.2908 17.2119C16.2034 17.3002 16.0994 17.3703 15.9846 17.4182C15.8699 17.4661 15.7469 17.4907 15.6226 17.4907H15.6126ZM18.9326 15.3407H18.7126C18.4633 15.3407 18.2242 15.2417 18.0479 15.0654C17.8716 14.8891 17.7726 14.65 17.7726 14.4007V12.9107C17.7752 12.6631 17.8754 12.4266 18.0514 12.2525C18.2274 12.0783 18.465 11.9807 18.7126 11.9807H18.9326C19.1802 11.9807 19.4178 12.0783 19.5938 12.2525C19.7698 12.4266 19.87 12.6631 19.8726 12.9107V14.4007C19.8726 14.6483 19.775 14.8859 19.6008 15.0619C19.4267 15.2379 19.1902 15.3381 18.9426 15.3407H18.9326Z"
			fill="#4F6DCF"
		/>
	</svg>
)
export default Logo
