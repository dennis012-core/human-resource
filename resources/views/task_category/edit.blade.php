	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
		<h4 class="modal-title">{!! trans('messages.edit').' '.trans('messages.task').' '.trans('messages.category') !!}</h4>
	</div>
	<div class="modal-body">
		{!! Form::model($task_category,['method' => 'PATCH','route' => ['task-category.update',$task_category] ,'class' => 'task-category-edit-form','id' => 'task-category-edit-form','data-table-refresh' => 'task-category-table']) !!}
			@include('task_category._form', ['buttonText' => trans('messages.update')])
		{!! Form::close() !!}
		<div class="clear"></div>
	</div>