import { API, AUTH_TOKEN, BEARER } from './constant';

const fetchAPI = async (url, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `${BEARER} ${AUTH_TOKEN}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Fetch all events
export const fetchEvents = async () => {
  const url = `${API}/events`;
  return fetchAPI(url);
};

// Fetch a specific event by ID
export const fetchEventById = async (id) => {
  const url = `${API}/events/${id}`;
  return fetchAPI(url);
};

// Create a new event
export const createEvent = async (eventData) => {
  const url = `${API}/events`;
  const options = {
    method: 'POST',
    body: JSON.stringify(eventData),
  };
  return fetchAPI(url, options);
};

// Create a new basic user
export const createBasicUser = async (userData) => {
  const url = `${API}/basic_users`;
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
  };
  return fetchAPI(url, options);
};

// Create a new organization user
export const createOrganizationUser = async (userData) => {
  const url = `${API}/organization_users`;
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
  };
  return fetchAPI(url, options);
};