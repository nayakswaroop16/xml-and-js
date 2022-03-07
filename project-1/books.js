const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateJsonFromXml = (xmlData) => {
    let tableData = []
    const table = document.getElementById("table-data");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `book`
    );
  
    nodes.map((item) => {
      let id = item.attributes[0].textContent;
      let title = Array.from(item.getElementsByTagName(`title`))[0].textContent;
      let author = Array.from(item.getElementsByTagName(`author`))[0].textContent;
      let price = Array.from(item.getElementsByTagName(`price`))[0].textContent;
      let category = item.attributes[1].textContent;
      tableData.push({ id, title, author, price, category })
    });
    renderTable(tableData)
  };
  
  const renderTable = (data) => {
    const table = document.getElementById("table-data");
    if (!table) {
      throw new Error("No table element found");
    }
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const searchTerm = params.get(`search`).toLowerCase();
      document.getElementById(`input-search-term`).value = searchTerm;
      data = data.filter(
        ({ id, title, author, price, category }) =>
          id.toLowerCase().includes(searchTerm) ||
          title.toLowerCase().includes(searchTerm) ||
          author.toLowerCase().includes(searchTerm) ||
          price.toLowerCase().includes(searchTerm) ||
          category.includes(searchTerm)
      );
      const categoryFilter = params.getAll('category')
      categoryFilter.forEach(filter => {
        const checkbox = document.getElementById(filter);
        checkbox.checked = true;
      });
      if (categoryFilter.length > 0) {
        data = data.filter(({ category }) =>
          categoryFilter.includes(category.toLowerCase())
        )
      }
      const priceFilter = params.get(`price`);
      if (priceFilter) {
        const radio = document.getElementById(`${priceFilter.split('-')[0]}euro`);
        radio.checked = true;
        data = data.filter(({ price }) =>
          parseFloat(price.replace("€", "")) > parseFloat(priceFilter.split("-")[0]) && 
          parseFloat(price.replace("€", "")) < parseFloat(priceFilter.split("-")[1]) 
        )
      }
    }
  
    const rows = data.map(
      ({ id, title, author, price, category }) => {
        table.innerHTML += `<tr id="table-row-${id}"><td>${id}</td><td>${title}</td><td>${author}</td><td>${price}</td><td>${category}</td></tr>`
      });
  };
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
  
  loadData(`http://localhost:8080/project-1/books.xml`, generateJsonFromXml);