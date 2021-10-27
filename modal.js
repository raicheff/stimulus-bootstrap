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

    const options = { show: false };

    $(this.element).modal(options);

  }

  disconnect() {

    $(this.element).modal("dispose");

  }

  show() {

    $(this.element).modal("show");

  }

  hide() {

    const deferred = $.Deferred();

    $(this.element).one("hidden.bs.modal", deferred.resolve).modal("hide");

    return deferred.promise();

  }

  toggle() {

    $(this.element).modal("toggle");

  }

  update() {

    $(this.element).modal("handleUpdate");

  }

}


/* EOF */
