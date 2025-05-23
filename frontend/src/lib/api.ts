const BASE_URL = "https://bananini.onrender.com";

export async function classifyImageByCNN(imageFile: File, model: string) {
  const formData = new FormData();
  formData.append('file', imageFile);  
  formData.append('model', model);   

  try {
    const response = await fetch(`${BASE_URL}/cnn-classify`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      return result; 
    } else {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to classify image');
    }
  } catch (err) {
    console.error('Error classifying image:', err);
    throw err;  
  }
}
