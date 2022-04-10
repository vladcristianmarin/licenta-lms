import {
	COURSE_CREATE_FAIL,
	COURSE_CREATE_REQUEST,
	COURSE_CREATE_RESET,
	COURSE_CREATE_SUCCESS,
	COURSE_DELETE_FAIL,
	COURSE_DELETE_REQUEST,
	COURSE_DELETE_RESET,
	COURSE_DELETE_SUCCESS,
	COURSE_UPDATE_FAIL,
	COURSE_UPDATE_REQUEST,
	COURSE_UPDATE_RESET,
	COURSE_UPDATE_SUCCESS,
	LIST_COURSES_CLIENT_UPDATE,
	LIST_COURSES_FAIL,
	LIST_COURSES_REQUEST,
	LIST_COURSES_SUCCESS,
} from '../constants/courseConstants';

export const courseCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case COURSE_CREATE_REQUEST:
			return { loading: true };
		case COURSE_CREATE_SUCCESS:
			return { loading: false, courseInfo: action.payload, success: true };
		case COURSE_CREATE_FAIL:
			return { loading: false, error: action.payload, success: false };
		case COURSE_CREATE_RESET:
			return { loading: false };
		default:
			return state;
	}
};

export const courseListReducer = (state = { courses: [] }, action) => {
	switch (action.type) {
		case LIST_COURSES_REQUEST:
			return { loading: true };
		case LIST_COURSES_SUCCESS:
			return { loading: false, courses: action.payload, success: true };
		case LIST_COURSES_FAIL:
			return { loading: false, error: action.payload, success: false };
		case LIST_COURSES_CLIENT_UPDATE:
			return { courses: action.payload };
		default:
			return state;
	}
};

export const courseDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case COURSE_DELETE_REQUEST:
			return { loading: true };
		case COURSE_DELETE_SUCCESS:
			return { loading: false, deletedCourse: action.payload, success: true };
		case COURSE_DELETE_FAIL:
			return { loading: false, error: action.payload, success: false };
		case COURSE_DELETE_RESET: {
			return {};
		}
		default:
			return state;
	}
};

export const courseUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case COURSE_UPDATE_REQUEST:
			return { loading: true };
		case COURSE_UPDATE_SUCCESS:
			return { loading: false, updatedCourse: action.payload, success: true };
		case COURSE_UPDATE_FAIL:
			return { loading: false, error: action.payload, success: false };
		case COURSE_UPDATE_RESET: {
			return {};
		}
		default:
			return state;
	}
};
