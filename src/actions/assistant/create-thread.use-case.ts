


const baseURL = 'http:// 192.168.100.220:3000/hannah-assistant';

export const createThreadUseCase = async () => {
    try {
        const resp = await fetch(`${baseURL}/create-thread`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        } )
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const { id } = await resp.json();
        console.log('Thread created:', id);
        return id;
        
    } catch (error) {
        console.error(`Error creating thread: ${error}`);
        throw new Error(`Error creating thread: ${error}`);
    }
}