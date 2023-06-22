import embedbase from ".";

const dummyData = async function () {
  const documents = [
    { data: "This is a document" },
    { data: "This is another document" },
    { data: "This is a third document" },
    { data: "This is a fourth document" },
    { data: "This is a fifth document" },
    { data: "This is a sixth document" },
    { data: "This is a seventh document" },
    { data: "This is a eighth document" },
    { data: "This is a ninth document" },
    {
      data: "This is a tenth document",
      metadata: { path: "https://google.com/abcd" },
    },
  ];
  const data = await embedbase
    .dataset("test-document")
    .chunkAndBatchAdd(documents);
  console.log(data);
};

export default dummyData;
