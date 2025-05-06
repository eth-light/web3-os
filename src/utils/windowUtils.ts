export function openWindow(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'flex';
    }
  }
  
  export function closeWindow(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'none';
    }
  }
  