/*
 * Stimulus-Bootstrap
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import $ from "jquery";
import { Controller } from "stimulus";


export default class extends Controller {

  connect() {

    $(this.element).tooltip();

  }

  disconnect() {

    $(this.element).tooltip("dispose");

  }

  show() {

    $(this.element).tooltip("show");

  }

  hide() {

    $(this.element).tooltip("hide");

  }

  toggle() {

    $(this.element).tooltip("toggle");

  }


}


/* EOF */
