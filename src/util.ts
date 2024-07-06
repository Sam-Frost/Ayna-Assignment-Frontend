export function formatTime(dateString: string) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
  
    // Pad single digit minutes with leading zero
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Formatted time string
    const formattedTime = `${hours}:${paddedMinutes} ${ampm}`;
    
    return formattedTime;
  }
  

export function getCurrentDateTime() {
    const now = new Date();
    
    // Format the date and time
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');
    
    // Combine all parts into ISO 8601 format
    const isoDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    
    return isoDateTime;
  }
  
