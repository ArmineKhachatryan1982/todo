@extends('layouts.app')
@section('content')
<section class="section">
    <div class="row justify-content-center">
        <div class="col-lg-8 mt-5">

            <div class="card shadow-sm">
                <div class="card-body">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                            <a href="{{ route('todo.list') }}">List</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Create</li>
                        </ol>
                    </nav>


                    <form id="todoForm">
                        {{-- Title --}}
                        <div class="form-group row">
                            <label for="title" class="col-sm-3 col-form-label font-weight-bold text-right">Title</label>
                            <div class="col-sm-9">
                                <input id="title" type="text" class="form-control" placeholder="Enter title">
                                <div class="invalid-feedback d-block" id="title-error"></div>
                            </div>
                        </div>

                        {{-- Description --}}
                        <div class="form-group row">
                            <label for="description" class="col-sm-3 col-form-label font-weight-bold text-right">Description</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" id="description" rows="4" placeholder="Enter description"></textarea>
                                <div class="invalid-feedback d-block" id="description-error"></div>
                            </div>
                        </div>

                        {{-- Status --}}
                        <div class="form-group row">
                            <label for="status" class="col-sm-3 col-form-label font-weight-bold text-right">Status</label>
                            <div class="col-sm-9">
                                <select id="status" class="form-control">
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>

                        {{-- Submit --}}
                        <div class="form-group row">
                            <div class="col-sm-9 offset-sm-3">
                                <button type="submit" class="btn btn-primary px-4">Create</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    </div>
</section>
@endsection

@section('script')
<script src="{{ asset('assets/js/create.js') }}"></script>
<script src="{{ asset('assets/js/displayValidationErrors.js') }}"></script>
@endsection
