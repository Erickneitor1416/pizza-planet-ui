fetch("http://127.0.0.1:5000/report/")
  .then((response) => response.json())
  .then((report) => {
    report.highest_revenue_by_month.month =
      months[report.highest_revenue_by_month.month];
    let reportTemplate = createReportTemplate(report);
    let table = $("#report tbody");
    table.append(reportTemplate);
  });

function createReportTemplate(report) {
  let template = $("#report-item-template")[0].innerHTML;
  return Mustache.render(template, report);
}
const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
