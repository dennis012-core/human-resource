<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class ChatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'message' => 'required'
        ];
    }

    public function messages(){
        return [
            'message.required' => trans('messages.type_your_message'),
        ];
    }

    public function attributes()
    {
        return ['message' => trans('messages.message')];
    }
}
