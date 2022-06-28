"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_lead_VerDetalles_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ver_PrimerInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver/PrimerInfo */ "./resources/js/components/lead/ver/PrimerInfo.vue");
/* harmony import */ var _ver_SegundaInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver/SegundaInfo */ "./resources/js/components/lead/ver/SegundaInfo.vue");
/* harmony import */ var _ver_Notas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver/Notas */ "./resources/js/components/lead/ver/Notas.vue");
/* harmony import */ var _ver_Estado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver/Estado */ "./resources/js/components/lead/ver/Estado.vue");
/* harmony import */ var _ver_EstadoResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ver/EstadoResponsive */ "./resources/js/components/lead/ver/EstadoResponsive.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PrimerInfo: _ver_PrimerInfo__WEBPACK_IMPORTED_MODULE_0__["default"],
    SegundaInfo: _ver_SegundaInfo__WEBPACK_IMPORTED_MODULE_1__["default"],
    Notas: _ver_Notas__WEBPACK_IMPORTED_MODULE_2__["default"],
    Estado: _ver_Estado__WEBPACK_IMPORTED_MODULE_3__["default"],
    EstadoResponsive: _ver_EstadoResponsive__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      progreso_barra: 5,
      valor: '',
      en_gestion_activo: false,
      en_negociacion_activo: false,
      en_demo_activo: false,
      contratado_activo: false,
      carrado_activo: false,
      archivado_activo: false
    };
  },
  watch: {
    valor: function valor() {
      switch (this.valor) {
        case 'sin contactar':
          this.progreso_barra = 5;
          this.en_gestion_activo = false;
          this.en_negociacion_activo = false;
          this.en_demo_activo = false;
          this.contratado_activo = false;
          this.carrado_activo = false;
          this.archivado_activo = false;
          break;

        case 'en gestion':
          this.progreso_barra = 20;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = false;
          this.en_demo_activo = false;
          this.contratado_activo = false;
          this.carrado_activo = false;
          this.archivado_activo = false;
          break;

        case 'en negociacion':
          this.progreso_barra = 35;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = true;
          this.en_demo_activo = false;
          this.contratado_activo = false;
          this.carrado_activo = false;
          this.archivado_activo = false;
          break;

        case 'en demo':
          this.progreso_barra = 50;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = true;
          this.en_demo_activo = true;
          this.contratado_activo = false;
          this.carrado_activo = false;
          this.archivado_activo = false;
          break;

        case 'contratado':
          this.progreso_barra = 65;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = true;
          this.en_demo_activo = true;
          this.contratado_activo = true;
          this.carrado_activo = false;
          this.archivado_activo = false;
          break;

        case 'cerrado':
          this.progreso_barra = 80;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = true;
          this.en_demo_activo = true;
          this.contratado_activo = true;
          this.carrado_activo = true;
          this.archivado_activo = false;
          break;

        case 'archivado':
          this.progreso_barra = 95;
          this.en_gestion_activo = true;
          this.en_negociacion_activo = true;
          this.en_demo_activo = true;
          this.contratado_activo = true;
          this.carrado_activo = true;
          this.archivado_activo = true;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valor: 'sin contactar',
      background: '#F1F1F1',
      color: '#7B7B7B'
    };
  },
  watch: {
    valor: function valor() {
      switch (this.valor) {
        case 'sin contactar':
          this.background = '#F1F1F1';
          this.color = '#7B7B7B';
          break;

        case 'en gestion':
          this.background = '#d9dafc';
          this.color = '#405fd1';
          break;

        case 'en negociacion':
          this.background = '#f6cdcd';
          this.color = '#f51a1a';
          break;

        case 'en demo':
          this.background = '#FFF6E8';
          this.color = '#F5A51A';
          break;

        case 'contratado':
          this.background = '#E5FFFA';
          this.color = '#1ABC9C';
          break;

        case 'cerrado':
          this.background = '#ffddf8';
          this.color = '#ee3bc7';
          break;

        case 'archivado':
          this.background = '#d5cdf6';
          this.color = '#a81af5';
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nota_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nota.vue */ "./resources/js/components/lead/ver/Nota.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Nota: _Nota_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7b5c5c97"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "botonDiv"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-angles-left"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Volver ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_Estado = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Estado");

  var _component_PrimerInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrimerInfo");

  var _component_EstadoResponsive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EstadoResponsive");

  var _component_SegundaInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SegundaInfo");

  var _component_Notas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Notas");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'leads'
    },
    "class": "volver_btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2, _hoisted_3];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Estado, {
    "class": "estado"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrimerInfo), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EstadoResponsive, {
    "class": "estado_responsive"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SegundaInfo), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Notas)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1c8bec0a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "estado"
};
var _hoisted_2 = {
  "class": "barra"
};
var _hoisted_3 = {
  "class": "grupo_estado"
};
var _hoisted_4 = {
  "class": "boxes"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "sinContactar",
    "class": "box_active"
  }, "Sin contactar", -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "boxes"
};
var _hoisted_7 = {
  "class": "boxes"
};
var _hoisted_8 = {
  "class": "boxes"
};
var _hoisted_9 = {
  "class": "boxes"
};
var _hoisted_10 = {
  "class": "boxes"
};
var _hoisted_11 = {
  "class": "boxes"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progreso",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progreso_barra + '%'
    })
  }, null, 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "sinContactar",
    value: "sin contactar",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "EnGestion",
    value: "en gestion",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "EnGestion",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.en_gestion_activo ? 'box_active' : 'box'])
  }, "En Gestión", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "EnNegociacion",
    value: "en negociacion",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "EnNegociacion",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.en_negociacion_activo ? 'box_active' : 'box'])
  }, "En negociación", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "EnDemo",
    value: "en demo",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "EnDemo",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.en_demo_activo ? 'box_active' : 'box'])
  }, "En Demo", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "Contratado",
    value: "contratado",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Contratado",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.contratado_activo ? 'box_active' : 'box'])
  }, "Contratado", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "Cerrado",
    value: "cerrado",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Cerrado",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.carrado_activo ? 'box_active' : 'box'])
  }, "Cerrado", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    name: "estado",
    id: "Archivado",
    value: "archivado",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.valor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.valor]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "Archivado",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.archivado_activo ? 'box_active' : 'box'])
  }, "Archivado", 2
  /* CLASS */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3f6f8544"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "estado_responsive"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "estado"
  }, "Estado:", -1
  /* HOISTED */
  );
});

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"sin contactar\" data-v-3f6f8544>Sin contactar</option><option value=\"en gestion\" data-v-3f6f8544>En Gestión</option><option value=\"en negociacion\" data-v-3f6f8544>En negociación</option><option value=\"en demo\" data-v-3f6f8544>En Demo</option><option value=\"contratado\" data-v-3f6f8544>Contratado</option><option value=\"cerrado\" data-v-3f6f8544>Cerrado</option><option value=\"archivado\" data-v-3f6f8544>Archivado</option>", 7);

var _hoisted_10 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "",
    id: "estado",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.valor = $event;
    }),
    "class": "select_estado",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: $data.background,
      color: $data.color
    })
  }, _hoisted_10, 4
  /* STYLE */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.valor]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6b9b9cdc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "nota"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4 data-v-6b9b9cdc>12/04/2022 - Diomar arenas</h4><p data-v-6b9b9cdc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy</p><img src=\"\" alt=\"\" data-v-6b9b9cdc><div class=\"imagen\" data-v-6b9b9cdc><svg width=\"103\" height=\"103\" viewBox=\"0 0 103 103\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-6b9b9cdc><path d=\"M90 2H13C6.92487 2 2 6.92487 2 13V90C2 96.0751 6.92487 101 13 101H90C96.0751 101 101 96.0751 101 90V13C101 6.92487 96.0751 2 90 2Z\" stroke=\"#F130D5\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-6b9b9cdc></path><path d=\"M32.2498 40.4998C36.8061 40.4998 40.4998 36.8061 40.4998 32.2498C40.4998 27.6934 36.8061 23.9998 32.2498 23.9998C27.6934 23.9998 23.9998 27.6934 23.9998 32.2498C23.9998 36.8061 27.6934 40.4998 32.2498 40.4998Z\" stroke=\"#F130D5\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-6b9b9cdc></path><path d=\"M101.001 68.0001L73.5007 40.5001L13.0007 101\" stroke=\"#F130D5\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-6b9b9cdc></path></svg></div>", 4);

var _hoisted_6 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_6);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7fbfa1d1"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "seccion_notas"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"crear_nota\" data-v-7fbfa1d1><h3 data-v-7fbfa1d1>Notas</h3><textarea name=\"\" id=\"contenido_nota\" cols=\"30\" rows=\"10\" placeholder=\"Agregar aquí una nota...\" data-v-7fbfa1d1></textarea><div class=\"agregar_seccion\" data-v-7fbfa1d1><div class=\"file_select\" data-v-7fbfa1d1><label for=\"file\" data-v-7fbfa1d1><svg class=\"icon_img\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-7fbfa1d1><path d=\"M13.4444 1H2.55556C1.69645 1 1 1.69645 1 2.55556V13.4444C1 14.3036 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.3036 15 13.4444V2.55556C15 1.69645 14.3036 1 13.4444 1Z\" stroke=\"#7B7B7B\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-7fbfa1d1></path><path d=\"M5.27775 6.44442C5.92208 6.44442 6.44442 5.92208 6.44442 5.27775C6.44442 4.63342 5.92208 4.11108 5.27775 4.11108C4.63342 4.11108 4.11108 4.63342 4.11108 5.27775C4.11108 5.92208 4.63342 6.44442 5.27775 6.44442Z\" stroke=\"#7B7B7B\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-7fbfa1d1></path><path d=\"M15.0001 10.3333L11.1112 6.44446L2.55566 15\" stroke=\"#7B7B7B\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-7fbfa1d1></path></svg><svg class=\"icon_file\" width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-7fbfa1d1><path d=\"M14 7.5632L7.8539 13.8056C7.10095 14.5704 6.07974 15 5.01492 15C3.9501 15 2.92889 14.5704 2.17594 13.8056C1.423 13.0409 1 12.0037 1 10.9222C1 9.84064 1.423 8.80342 2.17594 8.03868L8.32204 1.79625C8.82401 1.28642 9.50481 1 10.2147 1C10.9246 1 11.6054 1.28642 12.1073 1.79625C12.6093 2.30608 12.8913 2.99756 12.8913 3.71856C12.8913 4.43957 12.6093 5.13105 12.1073 5.64088L5.95456 11.8833C5.70358 12.1382 5.36317 12.2814 5.00823 12.2814C4.65329 12.2814 4.31289 12.1382 4.06191 11.8833C3.81093 11.6284 3.66993 11.2827 3.66993 10.9222C3.66993 10.5616 3.81093 10.2159 4.06191 9.961L9.73986 4.20084\" stroke=\"#7B7B7B\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-7fbfa1d1></path></svg><p class=\"adjuntar\" data-v-7fbfa1d1>Adjuntar archivo</p></label><input type=\"file\" name=\"\" id=\"file\" data-v-7fbfa1d1></div><div data-v-7fbfa1d1><button type=\"submit\" class=\"Agregar_nota_btn\" data-v-7fbfa1d1><i class=\"fa-solid fa-plus\" data-v-7fbfa1d1></i> Agregar nota </button></div></div></div><hr data-v-7fbfa1d1>", 2);

var _hoisted_4 = {
  "class": "historial"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "encabezado_historial"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Historial de comentarios"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "",
    id: "",
    "class": "ordenar"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Ascendente"
  }, "Ascendente"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Decreciente"
  }, "Decreciente")])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Nota = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Nota");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Nota)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2f0d4c45"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card_primerInfo"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"photo_container\" data-v-2f0d4c45><div class=\"perfil_photo\" data-v-2f0d4c45><img src=\"\" alt=\"\" data-v-2f0d4c45><svg width=\"48\" height=\"54\" viewBox=\"0 0 48 54\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M46 51.5V46C46 43.0826 44.8411 40.2847 42.7782 38.2218C40.7153 36.1589 37.9174 35 35 35H13C10.0826 35 7.28472 36.1589 5.22182 38.2218C3.15892 40.2847 2 43.0826 2 46V51.5\" stroke=\"#F130D5\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M24 24C30.0751 24 35 19.0751 35 13C35 6.92487 30.0751 2 24 2C17.9249 2 13 6.92487 13 13C13 19.0751 17.9249 24 24 24Z\" stroke=\"#F130D5\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg></div></div><div class=\"info\" data-v-2f0d4c45><h2 class=\"nombre\" data-v-2f0d4c45>Juan Camilo Saldarriaga Arenas</h2><div class=\"valor_cotizado\" data-v-2f0d4c45><h2 data-v-2f0d4c45>Valor cotizado</h2><p data-v-2f0d4c45>$4.200.000</p></div><div class=\"datos\" data-v-2f0d4c45><div class=\"group_one\" data-v-2f0d4c45><div class=\"dato\" data-v-2f0d4c45><svg width=\"18\" height=\"16\" viewBox=\"0 0 18 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M2.6 1.59998H15.4C16.28 1.59998 17 2.31998 17 3.19998V12.8C17 13.68 16.28 14.4 15.4 14.4H2.6C1.72 14.4 1 13.68 1 12.8V3.19998C1 2.31998 1.72 1.59998 2.6 1.59998Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M17 3.19995L9 8.79995L1 3.19995\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>jcamilo.saldarriaga@gmail.com.co</p></div><div class=\"dato\" data-v-2f0d4c45><svg width=\"13\" height=\"18\" viewBox=\"0 0 13 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M10.6 1H2.6C1.71634 1 1 1.71634 1 2.6V15.4C1 16.2837 1.71634 17 2.6 17H10.6C11.4837 17 12.2 16.2837 12.2 15.4V2.6C12.2 1.71634 11.4837 1 10.6 1Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M6.6001 13.8H6.6081\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>(+57) 312 5877 6495</p></div></div><div class=\"group_one\" data-v-2f0d4c45><div class=\"dato\" data-v-2f0d4c45><svg width=\"15\" height=\"18\" viewBox=\"0 0 15 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M14.0909 7.54545C14.0909 12.6364 7.54545 17 7.54545 17C7.54545 17 1 12.6364 1 7.54545C1 5.80949 1.68961 4.14463 2.91712 2.91712C4.14463 1.68961 5.80949 1 7.54545 1C9.28142 1 10.9463 1.68961 12.1738 2.91712C13.4013 4.14463 14.0909 5.80949 14.0909 7.54545Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M7.54559 9.72728C8.75057 9.72728 9.72741 8.75045 9.72741 7.54547C9.72741 6.34048 8.75057 5.36365 7.54559 5.36365C6.3406 5.36365 5.36377 6.34048 5.36377 7.54547C5.36377 8.75045 6.3406 9.72728 7.54559 9.72728Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>Bucaramanga - Colombia</p></div><div class=\"dato\" data-v-2f0d4c45><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M16.9995 13.0029V15.4163C17.0004 15.6403 16.9545 15.8621 16.8648 16.0674C16.775 16.2727 16.6434 16.4569 16.4783 16.6084C16.3132 16.7599 16.1183 16.8752 15.906 16.947C15.6938 17.0187 15.4689 17.0454 15.2457 17.0252C12.7702 16.7562 10.3923 15.9103 8.30312 14.5555C6.35937 13.3203 4.71141 11.6724 3.47627 9.72864C2.11669 7.62992 1.27059 5.24046 1.00653 2.75383C0.986426 2.53137 1.01286 2.30716 1.08416 2.09547C1.15546 1.88379 1.27005 1.68926 1.42065 1.52429C1.57124 1.35932 1.75454 1.22751 1.95886 1.13726C2.16319 1.04701 2.38407 1.00029 2.60744 1.00008H5.02086C5.41128 0.996235 5.78977 1.13449 6.0858 1.38907C6.38182 1.64365 6.57517 1.99718 6.62981 2.38378C6.73168 3.15613 6.92059 3.91447 7.19295 4.64435C7.30118 4.93229 7.32461 5.24523 7.26045 5.54607C7.19629 5.84692 7.04723 6.12307 6.83093 6.34179L5.80925 7.36348C6.95446 9.37752 8.62206 11.0451 10.6361 12.1903L11.6578 11.1686C11.8765 10.9524 12.1527 10.8033 12.4535 10.7391C12.7544 10.675 13.0673 10.6984 13.3552 10.8066C14.0851 11.079 14.8435 11.2679 15.6158 11.3698C16.0066 11.4249 16.3635 11.6217 16.6186 11.9228C16.8737 12.2239 17.0093 12.6083 16.9995 13.0029Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>(60) (4) 445 8796</p></div></div><div data-v-2f0d4c45><div class=\"dato\" data-v-2f0d4c45><svg width=\"19\" height=\"18\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M7.18191 17.2272C7.60867 17.2272 7.95463 16.8813 7.95463 16.4545C7.95463 16.0277 7.60867 15.6818 7.18191 15.6818C6.75514 15.6818 6.40918 16.0277 6.40918 16.4545C6.40918 16.8813 6.75514 17.2272 7.18191 17.2272Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M15.6819 17.2272C16.1087 17.2272 16.4546 16.8813 16.4546 16.4545C16.4546 16.0277 16.1087 15.6818 15.6819 15.6818C15.2551 15.6818 14.9092 16.0277 14.9092 16.4545C14.9092 16.8813 15.2551 17.2272 15.6819 17.2272Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M1 1H4.09091L6.16182 11.3468C6.23248 11.7026 6.42602 12.0222 6.70856 12.2496C6.9911 12.477 7.34463 12.5979 7.70727 12.5909H15.2182C15.5808 12.5979 15.9344 12.477 16.2169 12.2496C16.4994 12.0222 16.693 11.7026 16.7636 11.3468L18 4.86364H4.86364\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>No</p></div><div class=\"dato\" data-v-2f0d4c45><svg width=\"19\" height=\"16\" viewBox=\"0 0 19 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2f0d4c45><path d=\"M12.591 1H1V11.0455H12.591V1Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M12.5908 4.86365H15.6817L17.9999 7.18184V11.0455H12.5908V4.86365Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M4.47699 14.9092C5.54391 14.9092 6.40882 14.0443 6.40882 12.9774C6.40882 11.9104 5.54391 11.0455 4.47699 11.0455C3.41007 11.0455 2.54517 11.9104 2.54517 12.9774C2.54517 14.0443 3.41007 14.9092 4.47699 14.9092Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path><path d=\"M14.5226 14.9092C15.5896 14.9092 16.4545 14.0443 16.4545 12.9774C16.4545 11.9104 15.5896 11.0455 14.5226 11.0455C13.4557 11.0455 12.5908 11.9104 12.5908 12.9774C12.5908 14.0443 13.4557 14.9092 14.5226 14.9092Z\" stroke=\"#7B7B7B\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0d4c45></path></svg><p data-v-2f0d4c45>No</p></div></div></div></div>", 2);

var _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-06a0e085"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card_segundaInfo"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"parte1\" data-v-06a0e085><div class=\"group_items\" data-v-06a0e085><div class=\"item\" data-v-06a0e085><h3 data-v-06a0e085>Fecha</h3><p data-v-06a0e085>12/04/2022</p></div><div class=\"item\" data-v-06a0e085><h3 data-v-06a0e085>Tipo</h3><p data-v-06a0e085>One page con servicios</p></div></div><div class=\"group_items grupo2\" data-v-06a0e085><div class=\"item\" data-v-06a0e085><h3 data-v-06a0e085>Para</h3><p data-v-06a0e085>Vender en línea</p></div><div class=\"item\" data-v-06a0e085><h3 data-v-06a0e085>Ofrece</h3><p data-v-06a0e085>Servicios</p></div></div><div class=\"item n\" data-v-06a0e085><h3 data-v-06a0e085>Productos</h3><p data-v-06a0e085>10 - 20</p></div></div><div class=\"parte2\" data-v-06a0e085><div class=\"item secciones\" data-v-06a0e085><h3 data-v-06a0e085>Secciones</h3><p data-v-06a0e085>Nosotros, productos, servicios, portafolio, Terminos y condiciones, tratamiento datos personales, chat en línea, blog, contacto, politicas de envío</p></div></div>", 2);

var _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.botonDiv[data-v-7b5c5c97] {\r\n    width: 100%;\r\n    height: auto;\n}\n.volver_btn[data-v-7b5c5c97] {\r\n    width: 101px;\r\n    height: 30px;\r\n    background: #5e227f;\r\n    border-radius: 5px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    letter-spacing: 0.02em;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n    justify-content: space-between;\r\n    padding: 0 20px;\r\n    margin-bottom: 20px;\n}\n.estado_responsive[data-v-7b5c5c97] {\r\n    display: none;\n}\n@media screen and (max-width: 1235px) {\n.estado[data-v-7b5c5c97] {\r\n        display: none;\n}\n.estado_responsive[data-v-7b5c5c97] {\r\n        display: block;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.estado[data-v-1c8bec0a] {\r\n    width: 100%;\r\n    height: 31px;\n}\n.barra[data-v-1c8bec0a] {\r\n    width: 100%;\r\n    height: 1px;\r\n    background: #C4C4C4;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: 15px;\r\n    z-index: 1;\n}\ninput[type=\"radio\"][data-v-1c8bec0a] {\r\n  display: none;\n}\n.progreso[data-v-1c8bec0a] {\r\n    position: absolute;\r\n    height: 1px;\r\n    background: #f130d5;\r\n    transition: 0.5s;\n}\n.grupo_estado[data-v-1c8bec0a] {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\n}\n.boxes[data-v-1c8bec0a] {\r\n    z-index: 5;\n}\n.box[data-v-1c8bec0a] {\r\n    width: 169px;\r\n    height: 31px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 20px;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\r\n    padding-left: 19px;\r\n    transition: 0.3s\n}\n.box_active[data-v-1c8bec0a] {\r\n    width: 169px;\r\n    height: 31px;\r\n    background: #F130D5;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 20px;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #FFFFFF;\r\n    padding-left: 19px;\r\n    transition: 0.3s\n}\n@media screen and (max-width: 1400px) {\n.box[data-v-1c8bec0a] {\r\n        width: 150px;\n}\n.box_active[data-v-1c8bec0a] {\r\n        width: 150px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.estado_responsive[data-v-3f6f8544] {\r\n    margin-top: 26px;\n}\n.estado_responsive label[data-v-3f6f8544] {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\r\n    margin-bottom: 7px;\n}\n.select_estado[data-v-3f6f8544] {\r\n    width: 100%;\r\n    height: 31px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    padding-left: 13px;\r\n    padding-right: 8px;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 13px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    /* color: #ffddf8; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-6b9b9cdc] {\r\n    box-sizing: border-box;\n}\n.nota[data-v-6b9b9cdc] {\r\n    width: 100%;\r\n    height: auto;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    margin-top: 16px;\n}\n.nota h4[data-v-6b9b9cdc] {\r\n    font-family: 'Century Gothic';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #F130D5;\n}\n.nota p[data-v-6b9b9cdc] {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    /* or 136% */\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #555555;\r\n    margin: 0;\n}\n.imagen[data-v-6b9b9cdc] {\r\n    width: 351px;\r\n    height: 214px;\r\n    background: #FFE6FB;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\n}\n@media screen and (max-width: 576px) {\n.nota[data-v-6b9b9cdc] {\r\n        background: #FAFAFA;\n}\n.imagen[data-v-6b9b9cdc] {\r\n        width: 100%;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-7fbfa1d1] {\r\n    box-sizing: border-box;\n}\n.seccion_notas[data-v-7fbfa1d1] {\r\n    margin-top: 31px;\r\n    height: auto;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 5px;\r\n    padding: 25px;\r\n    display: grid;\r\n    grid-template-columns: 2fr 3fr;\n}\n.crear_nota[data-v-7fbfa1d1] {\r\n    padding-right: 18px;\n}\n.crear_nota h3[data-v-7fbfa1d1] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #F130D5;\n}\n.crear_nota textarea[data-v-7fbfa1d1] {\r\n    width: 100%;\r\n    height: 206px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #C9C9C9;\r\n    border-radius: 5px;\r\n    padding: 17px;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7b7b7b;\n}\n.crear_nota textarea[data-v-7fbfa1d1]::-moz-placeholder {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: rgba(123, 123, 123, 0.49);\n}\n.crear_nota textarea[data-v-7fbfa1d1]:-ms-input-placeholder {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: rgba(123, 123, 123, 0.49);\n}\n.crear_nota textarea[data-v-7fbfa1d1]::placeholder {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: rgba(123, 123, 123, 0.49);\n}\n.historial[data-v-7fbfa1d1] {\r\n    height: 813px;\r\n    background: #FAFAFA;\r\n    border-radius: 5px;\r\n    padding: 21px 30px;\n}\n.Agregar_nota_btn[data-v-7fbfa1d1] {\r\n    width: 168px;\r\n    height: 38px;\r\n    border: 1px solid #F130D5;\r\n    border-radius: 5px;\r\n    background-color: #FFFFFF;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    letter-spacing: 0.02em;\r\n    color: #F130D5;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 25px;\n}\ninput[type=\"file\"][data-v-7fbfa1d1] {\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\n}\nlabel[for=\"file\"][data-v-7fbfa1d1] {\r\n    cursor: pointer;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\n}\nlabel[for=\"file\"] p[data-v-7fbfa1d1] {\r\n    margin: 0;\n}\n.agregar_seccion[data-v-7fbfa1d1] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 18px;\n}\n.icon_img[data-v-7fbfa1d1] {\r\n    margin-right: 12px;\n}\n.icon_file[data-v-7fbfa1d1] {\r\n    margin-right: 5px;\n}\n@media screen and (max-width: 1080px) {\n.seccion_notas[data-v-7fbfa1d1] {\r\n        display: flex;\r\n        flex-direction: column;\n}\n.historial[data-v-7fbfa1d1] {\r\n        margin-top: 20px;\n}\n.crear_nota[data-v-7fbfa1d1] {\r\n        padding: 0;\n}\n}\n.encabezado_historial[data-v-7fbfa1d1] {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\n}\n.encabezado_historial h3[data-v-7fbfa1d1] {\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #7B7B7B;\n}\n.ordenar[data-v-7fbfa1d1] {\r\n    width: 148px;\r\n    height: 25px;\r\n    background: #FFFFFF;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-family: 'Century Gothic';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\n}\nhr[data-v-7fbfa1d1] {\r\n    display: none;\r\n    margin: 0;\n}\n@media screen and (max-width: 576px) {\n.historial[data-v-7fbfa1d1] {\r\n        height: auto;\n}\n.seccion_notas[data-v-7fbfa1d1] {\r\n        padding: 0;\n}\n.crear_nota[data-v-7fbfa1d1] {\r\n        padding: 25px;\n}\nhr[data-v-7fbfa1d1] {\r\n        display: block;\n}\n.historial[data-v-7fbfa1d1] {\r\n        margin-top: 20px;\r\n        background-color: #fff;\n}\n.ordenar[data-v-7fbfa1d1] {\r\n        background: #FAFAFA;\n}\n.adjuntar[data-v-7fbfa1d1] {\r\n        display: none;\n}\n.icon_file[data-v-7fbfa1d1] {\r\n        width: 20px;\r\n        height: 21px;\n}\n.icon_img[data-v-7fbfa1d1] {\r\n        width: 21px;\r\n        height: 21px\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card_primerInfo[data-v-2f0d4c45] {\r\n    /* min-width: 400px; */\r\n    width: 100%;\r\n    min-height: 166px;\r\n    height: auto;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 0 3%;\r\n    position: relative;\r\n    margin-top: 26px;\n}\n.datos[data-v-2f0d4c45] {\r\n    display: flex;\n}\n.dato[data-v-2f0d4c45] {\r\n    display: flex;\n}\n.dato p[data-v-2f0d4c45] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\r\n    margin-left: 15px;\n}\n.nombre[data-v-2f0d4c45] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 19px;\r\n    line-height: 23px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #F130D5;\r\n    margin-bottom: 21px;\n}\n.perfil_photo[data-v-2f0d4c45] {\r\n    width: 115px;\r\n    height: 115px;\r\n    border-radius: 50%;\r\n    background: #FFE6FB;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-right: 37px;\n}\n.group_one[data-v-2f0d4c45] {\r\n    margin-right: 95px;\n}\n.valor_cotizado[data-v-2f0d4c45] {\r\n    position: absolute;\r\n    bottom: 42px;\r\n    right: 52px;\r\n    display: flex;\r\n    flex-direction: column;\n}\n.valor_cotizado h2[data-v-2f0d4c45] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: right;\r\n    color: #F130D5;\r\n    margin: 0 !important;\n}\n.valor_cotizado p[data-v-2f0d4c45] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: right;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\r\n    margin: 5px 0 0 0 !important;\n}\n.title_m[data-v-2f0d4c45] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 19px;\r\n    line-height: 23px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #F130D5;\r\n    margin-left: 6%;\r\n    margin-bottom: 18px;\n}\n@media screen and (max-width: 1235px) {\n.perfil_photo[data-v-2f0d4c45] {\r\n        margin-right: 0px;\r\n        margin: auto;\n}\n.photo_container[data-v-2f0d4c45] {\r\n        width: 100%;\r\n        position: absolute;\r\n        top: -57.5px;\n}\n.card_primerInfo[data-v-2f0d4c45] {\r\n        margin-top: 60px;\r\n        padding-top: 70px;\r\n        padding-bottom: 25px;\r\n        justify-content: center;\n}\n.nombre[data-v-2f0d4c45] {\r\n        display: flex;\r\n        justify-content: center;\r\n        text-align: center;\r\n        margin-bottom: 10px;\n}\n.botonDiv[data-v-2f0d4c45] {\r\n        display: flex;\r\n        justify-content: space-between;\n}\n.group_one[data-v-2f0d4c45] {\r\n        margin-right: 0px;\n}\n.info[data-v-2f0d4c45] {\r\n        width: 100%;\n}\n.datos[data-v-2f0d4c45] {\r\n        max-width: 700px;\r\n        margin: auto;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0 10px;\n}\n.valor_cotizado[data-v-2f0d4c45] {\r\n        position: static;\r\n        align-items: center;\r\n        margin-bottom: 20px;\n}\n}\n@media screen and (max-width: 720px) {\n.datos[data-v-2f0d4c45] {\r\n        flex-direction: column;\n}\n.nombre[data-v-2f0d4c45] {\r\n        padding: 0 50px;\r\n        margin-bottom: 21px;\n}\n.valor_cotizado[data-v-2f0d4c45] {\r\n        position: absolute;\r\n        bottom: 15px;\r\n        right: 52px;\n}\n}\n@media screen and (max-width: 550px) {\n.valor_cotizado[data-v-2f0d4c45] {\r\n        right: 20px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card_segundaInfo[data-v-06a0e085] {\r\n    width: 100%;\r\n    height: auto;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\r\n    border-radius: 5px;\r\n    margin-top: 27px;\r\n    padding: 25px;\n}\n.parte1[data-v-06a0e085] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: start;\n}\n.item h3[data-v-06a0e085] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #F130D5;\n}\n.item[data-v-06a0e085] {\r\n    margin-right: 100px;\n}\n@media screen and (max-width: 1035px) {\n.item[data-v-06a0e085] {\r\n        margin-right: 80px;\n}\n}\n@media screen and (max-width: 955px) {\n.item[data-v-06a0e085] {\r\n        margin-right: 60px;\n}\n}\n@media screen and (max-width: 857px) {\n.item[data-v-06a0e085] {\r\n        margin-right: 40px;\n}\n}\n.n[data-v-06a0e085] {\r\n    margin-right: 10px;\n}\n.item p[data-v-06a0e085] {\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    display: flex;\r\n    align-items: center;\r\n    letter-spacing: 0.02em;\r\n    color: #7B7B7B;\n}\n.parte2[data-v-06a0e085] {\r\n    display: flex;\n}\n.secciones[data-v-06a0e085] {\r\n    display: flex;\r\n    width: auto !important;\n}\n.secciones p[data-v-06a0e085] {\r\n    margin-left: 15px !important;\r\n    margin: 0;\n}\n.secciones h3[data-v-06a0e085] {\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: start;\n}\n.group_items[data-v-06a0e085] {\r\n    display: flex;\n}\n.last[data-v-06a0e085] {\r\n    width: 30% !important;\n}\n@media screen and (max-width: 768px) {\n.parte1[data-v-06a0e085] {\r\n        flex-direction: column;\n}\n.item[data-v-06a0e085] {\r\n        margin-right: 0px;\r\n        width: 100%;\n}\n.secciones[data-v-06a0e085] {\r\n        flex-direction: column;\n}\n.secciones p[data-v-06a0e085] {\r\n        margin-left: 0px !important;\r\n        margin-top: 8px !important;\r\n        margin: 0;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_style_index_0_id_7b5c5c97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_style_index_0_id_7b5c5c97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_style_index_0_id_7b5c5c97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_style_index_0_id_1c8bec0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_style_index_0_id_1c8bec0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_style_index_0_id_1c8bec0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_style_index_0_id_3f6f8544_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_style_index_0_id_3f6f8544_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_style_index_0_id_3f6f8544_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_style_index_0_id_6b9b9cdc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_style_index_0_id_6b9b9cdc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_style_index_0_id_6b9b9cdc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_style_index_0_id_7fbfa1d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_style_index_0_id_7fbfa1d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_style_index_0_id_7fbfa1d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_style_index_0_id_2f0d4c45_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_style_index_0_id_2f0d4c45_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_style_index_0_id_2f0d4c45_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_style_index_0_id_06a0e085_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_style_index_0_id_06a0e085_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_style_index_0_id_06a0e085_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/lead/VerDetalles.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/lead/VerDetalles.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerDetalles_vue_vue_type_template_id_7b5c5c97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true */ "./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true");
/* harmony import */ var _VerDetalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerDetalles.vue?vue&type=script&lang=js */ "./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js");
/* harmony import */ var _VerDetalles_vue_vue_type_style_index_0_id_7b5c5c97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css */ "./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VerDetalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VerDetalles_vue_vue_type_template_id_7b5c5c97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7b5c5c97"],['__file',"resources/js/components/lead/VerDetalles.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/Estado.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/lead/ver/Estado.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Estado_vue_vue_type_template_id_1c8bec0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Estado.vue?vue&type=template&id=1c8bec0a&scoped=true */ "./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true");
/* harmony import */ var _Estado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Estado.vue?vue&type=script&lang=js */ "./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js");
/* harmony import */ var _Estado_vue_vue_type_style_index_0_id_1c8bec0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css */ "./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Estado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Estado_vue_vue_type_template_id_1c8bec0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1c8bec0a"],['__file',"resources/js/components/lead/ver/Estado.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/EstadoResponsive.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/lead/ver/EstadoResponsive.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EstadoResponsive_vue_vue_type_template_id_3f6f8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true */ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true");
/* harmony import */ var _EstadoResponsive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstadoResponsive.vue?vue&type=script&lang=js */ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js");
/* harmony import */ var _EstadoResponsive_vue_vue_type_style_index_0_id_3f6f8544_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css */ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EstadoResponsive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EstadoResponsive_vue_vue_type_template_id_3f6f8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3f6f8544"],['__file',"resources/js/components/lead/ver/EstadoResponsive.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/Nota.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/lead/ver/Nota.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nota_vue_vue_type_template_id_6b9b9cdc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true */ "./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true");
/* harmony import */ var _Nota_vue_vue_type_style_index_0_id_6b9b9cdc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css */ "./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_Nota_vue_vue_type_template_id_6b9b9cdc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6b9b9cdc"],['__file',"resources/js/components/lead/ver/Nota.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/Notas.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/lead/ver/Notas.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notas_vue_vue_type_template_id_7fbfa1d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true */ "./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true");
/* harmony import */ var _Notas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notas.vue?vue&type=script&lang=js */ "./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js");
/* harmony import */ var _Notas_vue_vue_type_style_index_0_id_7fbfa1d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css */ "./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Notas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notas_vue_vue_type_template_id_7fbfa1d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7fbfa1d1"],['__file',"resources/js/components/lead/ver/Notas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/PrimerInfo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/lead/ver/PrimerInfo.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrimerInfo_vue_vue_type_template_id_2f0d4c45_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true */ "./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true");
/* harmony import */ var _PrimerInfo_vue_vue_type_style_index_0_id_2f0d4c45_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css */ "./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_PrimerInfo_vue_vue_type_template_id_2f0d4c45_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2f0d4c45"],['__file',"resources/js/components/lead/ver/PrimerInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/ver/SegundaInfo.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/lead/ver/SegundaInfo.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SegundaInfo_vue_vue_type_template_id_06a0e085_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true */ "./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true");
/* harmony import */ var _SegundaInfo_vue_vue_type_style_index_0_id_06a0e085_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css */ "./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_DIOMAR_appEvendiCrud_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_SegundaInfo_vue_vue_type_template_id_06a0e085_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-06a0e085"],['__file',"resources/js/components/lead/ver/SegundaInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerDetalles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Estado.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EstadoResponsive.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_template_id_7b5c5c97_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_template_id_7b5c5c97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=template&id=7b5c5c97&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_template_id_1c8bec0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_template_id_1c8bec0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Estado.vue?vue&type=template&id=1c8bec0a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=template&id=1c8bec0a&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_template_id_3f6f8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_template_id_3f6f8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=template&id=3f6f8544&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_template_id_6b9b9cdc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_template_id_6b9b9cdc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=template&id=6b9b9cdc&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_template_id_7fbfa1d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_template_id_7fbfa1d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=template&id=7fbfa1d1&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_template_id_2f0d4c45_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_template_id_2f0d4c45_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=template&id=2f0d4c45&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_template_id_06a0e085_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_template_id_06a0e085_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=template&id=06a0e085&scoped=true");


/***/ }),

/***/ "./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerDetalles_vue_vue_type_style_index_0_id_7b5c5c97_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/VerDetalles.vue?vue&type=style&index=0&id=7b5c5c97&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Estado_vue_vue_type_style_index_0_id_1c8bec0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Estado.vue?vue&type=style&index=0&id=1c8bec0a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EstadoResponsive_vue_vue_type_style_index_0_id_3f6f8544_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/EstadoResponsive.vue?vue&type=style&index=0&id=3f6f8544&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nota_vue_vue_type_style_index_0_id_6b9b9cdc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Nota.vue?vue&type=style&index=0&id=6b9b9cdc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notas_vue_vue_type_style_index_0_id_7fbfa1d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/Notas.vue?vue&type=style&index=0&id=7fbfa1d1&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrimerInfo_vue_vue_type_style_index_0_id_2f0d4c45_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/PrimerInfo.vue?vue&type=style&index=0&id=2f0d4c45&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SegundaInfo_vue_vue_type_style_index_0_id_06a0e085_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/lead/ver/SegundaInfo.vue?vue&type=style&index=0&id=06a0e085&scoped=true&lang=css");


/***/ })

}]);