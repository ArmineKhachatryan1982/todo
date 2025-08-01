@extends('layouts.app')

@section('content')



    <div class="d-flex justify-content-end mt-5">
        <a href="{{ route('todo.create') }}" class="btn btn-primary px-4 py-2">Create</a>
    </div>
    <div id="message" class="alert alert-info text-center mt-4 fw-semibold fs-5 shadow-sm rounded d-none" role="alert">

    </div>

    <table id="todo-table" style="display: none;" class="table table-bordered mt-3">
        <thead>
            <tr>
                <th scope="col">N</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <!-- Modal  -->
<x-edit-modal />
<x-modal-notification />

@endsection

@section('script')
    <script src="{{ asset('assets/js/list.js') }}"></script>
    <script src="{{ asset('assets/js/displayValidationErrors.js') }}"></script>
@endsection
