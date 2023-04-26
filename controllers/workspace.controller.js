const Workspace = require("../models/Workspace")

class WorkspaceController {
    async create(req, res, next) {
        const {title, description} = req.body

        if (!title || !description) {
            return res.status(400).json({type : "error", message: "Title and description have to be specified."})
        }

        const workspace = new Workspace({
            title,
            description
        })

        await workspace.save()

        res.status(200).json({})
    }

    async getOne() {

    }

    async getAll() {

    }
}

module.exports = new WorkspaceController()