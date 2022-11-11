// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  /*   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8'); */
  //Return the content of the data file in json format

  const fileContents1 = await fs.writeFile(jsonDirectory + "/data.json", JSON.stringify({ name: new Date() }), (err) => {
    if (err) { console.log(err); } else { console.log("Usuário inserido/alterado") }
  })

  res.status(200).json(fileContents1);
}

