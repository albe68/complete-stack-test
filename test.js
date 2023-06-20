
async function logJSONData() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  
//   logJSONData();
module.exports= {logJSONData}
