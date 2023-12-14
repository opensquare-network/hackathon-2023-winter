import Card from "@/components/card";
import FormItem from "@/components/form/item";
import { cn } from "@/utils";
import { Input } from "@osn/common-ui";
import { SystemAdd, SystemDelete } from "@osn/icons/opensquare";
import { noop } from "lodash-es";
import { useState } from "react";
import { useShallowCompareEffect } from "react-use";
import RichEditor from "@osn/common-ui/es/RichEditor";
import { CATEGORIES } from "@/utils/constants";
import Tag from "@/components/tag";

export default function ApplyProjectInfoForm({
  formValue = {},
  setFormValue = noop,
}) {
  function updateFormValue(key, value) {
    setFormValue({ ...formValue, [key]: value });
  }

  return (
    <Card>
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <FormItem label="Logo"></FormItem>
          <FormItem label="Cover Image"></FormItem>
        </div>

        <FormItem htmlFor="name" label="Project Name">
          <Input
            id="name"
            autoComplete="off"
            value={formValue.name}
            onChange={(e) => {
              updateFormValue("name", e.target.value);
            }}
          />
        </FormItem>

        <FormItem
          htmlFor="summary"
          label="Summary"
          description="Displayed in the project card, please tell us about your project briefly"
        >
          <Input
            id="summary"
            value={formValue.summary}
            onChange={(e) => {
              updateFormValue("summary", e.target.value);
            }}
          />
        </FormItem>

        <FormItem
          label="Category"
          description="Please select a category for this project to get the right contributors"
        >
          <CategoryTagsField
            value={formValue.category}
            onChangeValue={(value) => {
              updateFormValue("category", value);
            }}
          />
        </FormItem>

        <FormItem label="Related Links">
          <RelatedLinksField
            defaultValue={formValue.links}
            onChangeValue={(value) => {
              updateFormValue("links", value);
            }}
          />
        </FormItem>

        <FormItem
          label="Description"
          description="Please tell us about your project, aim for 200-500 words"
        >
          <RichEditor
            content={formValue.description}
            setContent={(value) => {
              updateFormValue("description", value);
            }}
            showButtons={false}
          />
        </FormItem>
      </div>
    </Card>
  );
}

function CategoryTagsField({ value = "", onChangeValue = noop }) {
  const categories = Object.values(CATEGORIES);

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Tag
          key={category}
          active={value === category}
          onClick={() => onChangeValue(category)}
        >
          {category}
        </Tag>
      ))}
    </div>
  );
}

function RelatedLinksField({ defaultValue = [], onChangeValue = noop }) {
  const [links, setLinks] = useState(defaultValue);

  useShallowCompareEffect(() => {
    onChangeValue(links);
  }, [links]);

  return (
    <div>
      <div className="space-y-3">
        {links.map((value, idx) => (
          <Input
            key={idx}
            value={value}
            onChange={(e) => {
              const newLinks = [...links];
              newLinks[idx] = e.target.value;
              setLinks(newLinks);
            }}
            suffix={
              idx > 0 && (
                <SystemDelete
                  role="button"
                  className={cn(
                    "w-5 h-5",
                    "[&_path]:fill-text-tertiary [&_path]:hover:fill-text-secondary",
                  )}
                  onClick={() => {
                    setLinks(links.filter((_, i) => i !== idx));
                  }}
                />
              )
            }
          />
        ))}
      </div>
      <button
        className="mt-3 flex items-center text14semibold text-text-brand-secondary"
        onClick={() => {
          setLinks([...links, ""]);
        }}
      >
        <SystemAdd className="mr-1 w-5 h-5 [&_path]:fill-text-brand-secondary" />
        New Link
      </button>
    </div>
  );
}
