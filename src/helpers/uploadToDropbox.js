// configure dropbox
import { Dropbox } from "dropbox";
const accessToken =
  "LwFgE1z7_FkAAAAAAAAAAZZYkcz-Vkpg0dMbrLF76-CKBNMtp33b80uT9rFpcVF5";
const dbx = new Dropbox({
  accessToken,
  fetch: window.fetch.bind(window),
});

// default parent path -> "" means root folder
let parentPath = "";

async function createFolder(folderName) {
  folderName = folderName.toUpperCase();
  const fullPath = `${parentPath}/${folderName}`;

  // console.log(folderName);

  const createRes = await dbx
    .filesCreateFolderV2({ path: fullPath })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return {
    path: fullPath,
    isSuccess: createRes.status === 200,
    status: createRes.status,
  };
}

async function uploadFiles(directory, files) {
  const uploadPromises = files.map((file) => {
    return dbx
      .filesUpload({
        path: `${directory}/${file.name}`,
        contents: file,
      })
      .then((response) => {
        return response;
      });
  });

  // console.info(uploadPromises);

  return await Promise.all(uploadPromises).catch((err) => console.log(err));
}

async function createSharableLink(resourcePath) {
  const response = await fetch(
    "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: resourcePath,
        settings: { requested_visibility: "public" },
      }),
      method: "POST",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch(() => null);

  // console.log(response);

  if (response.url) {
    const { name, url } = response;

    const data = {
      tag: response[".tag"], // folder, file, etc.
      name: name,
      path: resourcePath,
      url, // shareable link to resource
    };

    // console.log(data);

    return JSON.stringify(data);
  } else return null;
}

export async function uploadToCloud(folderName, files, destination) {
  // change parentpath if specified
  parentPath = destination || "";

  // create folder
  const { path, isSuccess } = await createFolder(folderName);

  // upload files if success
  if (isSuccess) {
    const res = await uploadFiles(path, files).catch((err) => err);
    // console.log(res);
    if (res.error) return null;

    // create shearable link
    return await createSharableLink(path);
  } else return null;
}

/* --- */

async function deleteFolder(path) {
  const res = await dbx
    .filesDeleteV2({ path })
    .then((response) => {
      return response;
    })
    .catch(() => {
      return null;
    });

  return !res || res.error ? null : res;
}

export async function updateOnCloud(path, files) {
  const { targetPath, folderName } = path;
  // delete old folder
  await deleteFolder(targetPath).catch(() => null);

  // build new path
  let basePath;
  let folderPath;
  if (folderName) {
    basePath = `${targetPath.substring(0, targetPath.lastIndexOf("/"))}`;
    folderPath = folderName;
  } else folderPath = targetPath;

  // console.log(folderPath);

  // upload files and get link
  const link = await uploadToCloud(folderPath, files, basePath);

  return link;
}

export default { uploadToCloud, updateOnCloud };
