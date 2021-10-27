/*
 * Stimulus-Bootstrap
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import $ from "jquery";
import { Controller } from "@hotwired/stimulus";


export default class extends Controller {

  connect() {

    $(this.element).tab();

  }

  disconnect() {

    $(this.element).tab("dispose");

  }

  show() {

    $(this.element).tab("show");

  }

}


/* EOF */
