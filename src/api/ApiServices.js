export async function PostCallWithErrorResponse(url, requestBody) {
  var resp;

  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}
export async function PostCallWithErrorResponseReqBody(url, requestBody) {
  var resp;

  return await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}
export async function simpleGetCallWithToken(url) {
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function DeleteCallWithErrorResponseWithToken(url, requestBody) {
  var resp;
  // const [progress, setProgress] = useState(0);
  // const { customerData } = useContext(AppContext);

  return await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    // body: JSON.stringify({...customerData,...requestBody})
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function deleteWithAuthCall(url, requestBody) {
  return await fetch(url, {
    method: "DELETE",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",

      Authorization: "Token " + localStorage.getItem("auth_token"),
    },

    body: requestBody,
  }).then((response) => response.json());
}

export async function multipartPostCallWithErrorResponse(url, requestBody) {
  var resp;
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",

      // "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}



export async function getWithAuthCallWithErrorResponse(url) {
  var resp;
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function getWithRequestBodyWithErrorResponse(url, requestBody) {
  var resp;
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Token " + localStorage.getItem("USER_AUTH_TOKEN"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function postWithAuthCallWithErrorResponse(url, requestBody) {
  var resp;
  return await fetch(url, {
    method: "POST",
    // mode: "cors",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function putMultipartWithAuthCallWithErrorResponse(
  url,
  requestBody
) {
  var resp;
  return await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      //'Content-Type': 'multipart/form-data',
      Authorization: "Token " + localStorage.getItem("USER_AUTH_TOKEN"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function postMultipartWithAuthCallWithErrorResponse(
  url,
  requestBody
) {
  var resp;
  return await fetch(url, {
    method: "POST",

    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      //  'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    body: requestBody,
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function simpleGetCallWithErrorResponse(url) {
  var resp;
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
  })
    .then((response) => {
      resp = response;
      return response.json();
    })
    .then((json) => {
      return {
        response: resp,
        json: json,
        error: !resp.ok,
      };
    });
}

export async function simpleGetCall(url) {
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function simplePostCall(url, requestBody) {
  return await fetch(url, {
    method: "POST",
    // mode: "cors",
    headers: {
      Accept: "application/json"
      // "Content-Type": "application/json",
      // Origin: window.location.origin,
      //'Access-Control-Allow-Credentials': "*"
    },
    withCredentials: true,
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
  //.then(data=>data.json());
}

export async function multipartPostCall(url, requestBody) {
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      //'Content-Type': 'multipart/form-data',
      // 'Authorization': 'Token ' + await AsyncStorage.getItem(AppStrings.TOKEN)
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function getWithAuthCall(url) {
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //Authorization: 'Token ' + (await AsyncStorage.getItem(AppStrings.TOKEN)),
    },
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function postWithAuthCall(url, requestBody) {
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      // Authorization: 'Token ' + (await AsyncStorage.getItem(AppStrings.TOKEN)),
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function putWithAuthCall(url, requestBody) {
  return await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //Authorization: 'Token ' + (await AsyncStorage.getItem(AppStrings.TOKEN)),
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function postMultipartWithAuthCall(url, requestBody) {
  return await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function putMultipartWithAuthCall(url, requestBody) {
  return await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      //Authorization: 'Token ' + (await AsyncStorage.getItem(AppStrings.TOKEN)),
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}
export async function updateProfile(url, requestBody) {
  return await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // Authorization: 'Token ' + (await AsyncStorage.getItem(AppStrings.token)),
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

//-------------------------------------
export async function getResult(data) {
  return JSON.parse(data.trim());
}
//-------------------------------------
