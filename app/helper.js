import * as Toast from 'nativescript-toast';

export function toast(message){
	Toast.makeText(message).show();
}