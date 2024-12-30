export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    //Aqui pode ser mudado para axios

    const response = await fetch(
      `https://glm-vue-http-demo-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      },
    );

    if (!response.ok) {
      //error here
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
};
