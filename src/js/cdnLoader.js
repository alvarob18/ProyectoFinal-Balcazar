export const loadCDNs = () => {
    // Cargar los estilos
    const links = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com/css2?family=Roboto:wght@100;700;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      "https://cdn.jsdelivr.net/boxicons/2.0.9/css/boxicons.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    ];
  
    links.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  
    // Cargar los scripts
    const scripts = [
      "https://kit.fontawesome.com/a076d05399.js",
      "https://code.jquery.com/jquery-3.5.1.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"
    ];
  
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });
  };