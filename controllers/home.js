module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getProgress: (req, res) => {
    res.render("progress sheet.ejs");
  },
  getCreation: (req, res) => {
    res.render("workout creation.ejs");
  },
  getPlan: (req, res) => {
    res.render("workout plan.ejs");
  }
}
