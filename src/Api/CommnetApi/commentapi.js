export const postcomnetapis = async (comments) => {
  const res= await fetch('https://social-server-sooty.vercel.app/coment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments),
  })
    const data = await res.json();
    return data;        
    
}