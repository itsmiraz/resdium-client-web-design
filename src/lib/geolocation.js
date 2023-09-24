// geolocation.js

const IPINFO_API_TOKEN = process.env.NEXT_PUBLIC_IPINFO_API_TOKEN;

async function getUserGeolocation() {
  try {
    const response = await fetch(`https://ipinfo.io?token=${IPINFO_API_TOKEN}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error retrieving geolocation:', error);
    return null;
  }
}

export default getUserGeolocation;