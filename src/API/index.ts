import axios from "axios";

const ticketsAPI = {
  getTickets: async () => {
    const tickets = await axios
      .get("https://api.npoint.io/163b5e66df9f2741243e")
      .then((response) => response.data);

    return tickets;
  },
  getCompanies: async () => {
    const companies = await axios
      .get("https://api.npoint.io/a1b1c28b32d9785bb26c")
      .then((response) => response.data);

    return companies;
  },
};

export default ticketsAPI;
