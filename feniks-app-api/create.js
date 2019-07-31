import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = event.body;
  const params = {
    TableName: "clients",
    Item: {
      id: uuid.v1(),
      address: data.address,
      projects:data.projects,
      client: data.client
    }
  };
  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}