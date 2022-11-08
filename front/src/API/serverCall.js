
let BaseURL = "https://halogen-oxide-353818.rj.r.appspot.com";

export function serverCallURL(id) {
  
  return BaseURL + "/api/contenido/image/" + id;
}
async function internalServerCall(url, requestOptions, baseUrl) {
  const response = await fetch(baseUrl ? baseUrl + url : url, requestOptions);
  const text = await response.text();
  if (!response.ok) {
    const data = text && JSON.parse(text);
    const error =
      (data && data.error) || (data && data.message) || response.statusText;
    if (error == "Unauthorized") {
      // const router = useRouter()
      // router.push('/')
      localStorage.clear();
   
    }
    return Promise.reject(error);
  }
  const data = text && JSON.parse(text);
  if (data.error || data.result === "Error") {
    return Promise.reject(data.error ? data.error : "Error inesperado");
  } else {
    return Promise.resolve(data);
  }
}

export function serverCallGet(url, TOKEN, params, BaseUrl = BaseURL) {
  var tmp = url;
  if (params) {
    tmp = tmp + "?";
    Object.keys(params).forEach(key => {
      if (params[key] != null) {
        tmp =
          tmp +
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(params[key]) +
          "&";
      }
    });
    tmp = tmp.substring(0, tmp.length - 1);
  }

  const requestOptions = {
    credentials: "include",

    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("jwt")
    }
  };
  return internalServerCall(tmp, requestOptions, BaseUrl);
}

export function serverCallPost(url, data, TOKEN, params, BaseUrl = BaseURL) {
  var tmp = url;
  if (params) {
    tmp = tmp + "?";
    Object.keys(params).forEach(key => {
      if (params[key] != null) {
        tmp =
          tmp +
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(params[key]) +
          "&";
      }
    });
    tmp = tmp.substring(0, tmp.length - 1);
  }
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("jwt")
    },
    body: JSON.stringify(data)
  };

  return internalServerCall(tmp, requestOptions, BaseUrl);
}

export function serverCallPut(url, data, TOKEN, BaseUrl = BaseURL) {
  const requestOptions = {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("jwt")
    },
    body: JSON.stringify(data)
  };

  return internalServerCall(url, requestOptions, BaseUrl);
}

export function serverCallDelete(url, data, params, BaseUrl = BaseURL) {
  const requestOptions = {
    method: "DELETE",
    credentials: "include",
    headers: {
      // Authorization: "Bearer " + window.localStorage.getItem("jwt"),
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("jwt")
    }
  };
  return internalServerCall(url, requestOptions, BaseUrl);
}

export function serverCallUpload(url, data, BaseUrl = BaseURL) {
  const formData = new FormData();
  if (data) {
    Object.keys(data).forEach(key => {
      if (data[key] != null) {
        formData.append(key, data[key]);
      }
    });
  }
  const requestOptions = {
    method: "POST",
    body: formData
  };
  return internalServerCall(url, requestOptions, BaseUrl);
}

export function downloadFileGet(url, data, type, fileName) {
  return downloadFile("GET", url, data, type, fileName);
}
export function downloadFilePost(url, params, type, fileName) {
  return downloadFile("POST", url, params, type, fileName);
}

async function downloadFile(method, url, params, type, fileName) {
  var tmp = url;
  var requestOptions = {};
  if (method === "GET") {
    if (params) {
      tmp = tmp + "?";
      Object.keys(params).forEach(key => {
        if (params[key] != null) {
          tmp =
            tmp +
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(params[key]) +
            "&";
        }
      });
      tmp = tmp.substring(0, tmp.length - 1);
    }
    requestOptions = {
      method: "GET",
      headers: { Accept: type }
    };
  } else {
    requestOptions = {
      method: "POST",
      headers: {
        Accept: type,
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("jwt")
      },
      body: JSON.stringify(params)
    };
  }
  return fetch(tmp, requestOptions)
    .then(r => {
      if (!r.ok) {
        return Promise.reject(r.statusText);
      }
      return r.blob();
    })
    .then(blob => {
      var newBlob = new Blob([blob], { type: type });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }

      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement("a");
      link.href = data;
      link.download = fileName;
      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
      return;
    })
    .catch(error => {
      return Promise.reject(error);
    });
}
