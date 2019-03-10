import React from 'react'

const peopleIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet"  focusable="false" xmlns="http://www.w3.org/2000/svg"><path className="fill-inside" d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" ></path><path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" ></path></svg>)


const homeIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg"><path className="fill-inside" d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" ></path><path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z"></path></svg>)

const caseIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg"><path className="fill-inside" d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z"></path><path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" ></path></svg>)

const msgIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg"><path className="fill-inside" d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z" ></path><path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" ></path></svg>)

const bellIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet"  focusable="false" xmlns="http://www.w3.org/2000/svg"><path className="fill-inside" d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" ></path><path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z"></path></svg>)

const boxIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z"></path></svg>)

const likeIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet"  focusable="false"><path d="M17.51,11L15.36,8a14.81,14.81,0,0,1-2.25-5.29L12.74,1H10.5A2.5,2.5,0,0,0,8,3.5V4.08a9,9,0,0,0,.32,2.39L9,9H4.66A2.61,2.61,0,0,0,2,11.4a2.48,2.48,0,0,0,.39,1.43,2.48,2.48,0,0,0,.69,3.39,2.46,2.46,0,0,0,1.45,2.92,2.47,2.47,0,0,0,0,.36A2.5,2.5,0,0,0,7,22h4.52a8,8,0,0,0,1.94-.24l3-.76H21V11H17.51ZM19,19H16.88l-3.41.82A6,6,0,0,1,12,20H7a0.9,0.9,0,0,1-.9-0.89s0-.07,0-0.14l0.15-1-1-.4a0.9,0.9,0,0,1-.55-0.83,0.93,0.93,0,0,1,0-.22L5,15.57,4.27,15a0.9,0.9,0,0,1-.39-0.74A0.88,0.88,0,0,1,4,13.82l0.46-.72L4,12.38a0.88,0.88,0,0,1-.14-0.51,1,1,0,0,1,1-.87H11.5L10.2,6.3a9,9,0,0,1-.33-2.37V3.38a0.5,0.5,0,0,1,.5-0.5h0.95a17.82,17.82,0,0,0,2.52,6.22L16.6,13H19v6Z" ></path></svg>)

const commentIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M18,10H6V9H18v1Zm4-5V22l-5-4H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM20,6H4V16H17.7L20,17.84V6Zm-4,6H8v1h8V12Z"></path></svg>)

const shareIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M24,12h0a1.18,1.18,0,0,0-.36-0.84L14,2V8H11A10,10,0,0,0,1,18v4H2.87A6.11,6.11,0,0,1,9,16h5v6l9.63-9.14A1.18,1.18,0,0,0,24,12s0,0,0,0h0Zm-8,5.54V14H9a8.15,8.15,0,0,0-6,2.84A8,8,0,0,1,11,10h5V6.48L21.81,12Z"></path></svg>)

const photoIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M21,6H18L16.5,3h-9L6,6H3A1,1,0,0,0,2,7V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7A1,1,0,0,0,21,6ZM7.36,8l1.5-3h6.28l1.5,3H20v2H16.58a5,5,0,0,0-9.16,0H4V8H7.36Zm7.76,4A3.13,3.13,0,1,1,12,8.88,3.13,3.13,0,0,1,15.13,12ZM4,18V11H7.1a5,5,0,1,0,9.8,0H20v7H4Z"></path></svg>)


const videoIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M21,5.92a1,1,0,0,0-.57.18L17,8.5V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V15.5l3.43,2.4a1,1,0,0,0,.57.18,1,1,0,0,0,1-1V6.92A1,1,0,0,0,21,5.92ZM15,16H4V8H15v8Zm2-5.21,3-2.1v6.62l-3-2.1V10.79Z"></path></svg>)

const searchIcon = (<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M21,19.67l-5.44-5.44a7,7,0,1,0-1.33,1.33L19.67,21ZM10,15.13A5.13,5.13,0,1,1,15.13,10,5.13,5.13,0,0,1,10,15.13Z" ></path></svg>)

const askIcon = `<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2zM12,20.2c-4.5,0-8.2-3.7-8.2-8.2S7.5,3.8,12,3.8c4.5,0,8.2,3.7,8.2,8.2S16.5,20.2,12,20.2zM11,16h2v2h-2V16zM16,9.3V10c0,1.7-1.3,2.9-3,2.9V14h-2v-1c0-1.1,0.9-2,2-2h0.3c0.5,0,0.9-0.4,0.9-0.9v-1.3c0-0.5-0.4-0.9-0.9-0.9h-2.6c-0.5,0-0.9,0.4-0.9,0.9V10H8V9.3C8,7.5,9.5,6,11.3,6h1.5C14.5,6,16,7.5,16,9.3z" class="large-icon" style="fill: currentColor"></path></svg>`

const settingIcon = `<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,5.13A2.13,2.13,0,1,1,14.12,12,2.12,2.12,0,0,1,12,14.13Zm7.91-2.87L22,9.38,19.26,4.62,16.6,5.5a1,1,0,0,1-1.29-.75L14.74,2H9.26L8.69,4.75A1,1,0,0,1,7.4,5.5L4.74,4.62,2,9.38l2.09,1.87a1,1,0,0,1,0,1.49L2,14.62l2.74,4.76L7.4,18.5a1,1,0,0,1,1.29.75L9.26,22h5.48l0.57-2.75a1,1,0,0,1,1.29-.75l2.66,0.88L22,14.62l-2.09-1.87A1,1,0,0,1,19.91,11.25ZM18.4,17.12l-1.22-.4a2.86,2.86,0,0,0-3.7,2.14l-0.26,1.26H10.78l-0.26-1.26a2.86,2.86,0,0,0-3.7-2.14l-1.22.4L4.38,15l1-.86a2.88,2.88,0,0,0,0-4.29L4.38,9,5.6,6.88l1.22,0.4a2.86,2.86,0,0,0,3.7-2.14l0.26-1.26h2.44l0.26,1.26a2.86,2.86,0,0,0,3.7,2.14l1.22-.4L19.62,9l-1,.86a2.88,2.88,0,0,0,0,4.29l1,0.86Z" class="large-icon" style="fill: currentColor"></path></svg>`;



const icon = {
	home: homeIcon,
	people: peopleIcon,
	case: caseIcon,
	message: msgIcon,
	bell: bellIcon,
	box: boxIcon,
	like: likeIcon,
	comment: commentIcon,
	share: shareIcon,
	photo: photoIcon,
	video: videoIcon,
	search: searchIcon,
	ask: askIcon,
	setting: settingIcon
}

export default icon;

