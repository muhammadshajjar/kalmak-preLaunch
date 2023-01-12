const sendEmailToSheet = async (email, url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([[new Date().toLocaleString(), email]]),
    });

    if (!response.ok) throw new Error("Unable to send data to sheet!");
  } catch (err) {
    console.log(err.message);
  }
};

export default sendEmailToSheet;
