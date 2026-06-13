export const exportToCSV = (data, filename = "report.csv") => {
  if (!data.length) return;

  const headers = Object.keys(data[0]);

  const csvRows = [
    headers.join(","),
    ...data.map((row) => headers.map((field) => row[field]).join(",")),
  ];

  const csvString = csvRows.join("\n");

  const blob = new Blob([csvString], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");

  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
