import axios from "axios";

const ticketsAPI = {
  getTickets: async () => {
    const tickets = await axios
      .get("https://api.npoint.io/163b5e66df9f2741243e")
      .then((response) => response.data);

    return tickets;
  },
};

export default ticketsAPI;
