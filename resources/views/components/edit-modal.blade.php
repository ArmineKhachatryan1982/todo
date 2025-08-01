<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form id="todoFormEdit">
        <div class="modal-header">
         
           <h4 class="modal-title text-primary">Edit </h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <input type="hidden"  id="id">

          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">Title</label>
            <div class="col-sm-9">
              <input id="title" type="text" class="form-control">
              <div class="invalid-feedback d-block" id="title-error"></div>
            </div>
          </div>

          <div class="form-group row">
            <label for="description" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-9">
              <textarea id="description" class="form-control" style="height: 100px"></textarea>
              <div class="invalid-feedback d-block" id="description-error"></div>
            </div>
          </div>

          <div class="form-group row">
            <label for="status" class="col-sm-3 col-form-label">Status</label>
            <div class="col-sm-9">
              <select id="status" class="form-control">
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="onUpdate()">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>

