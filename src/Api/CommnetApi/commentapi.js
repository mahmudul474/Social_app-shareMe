export const postcomnetapis = async (comments) => {
  const res = await fetch("http://localhost:5000/coment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comments)
  });
    const data = await res.json();
    return data;        
    
}